// Run from the repository root: node artifacts/portfolio-refresh/verify.mjs <playwright module path> [base URL]
// Uses an existing Playwright installation; does not add project dependencies.
import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { chromium } = require(process.argv[2] || "playwright");
import fs from "node:fs/promises";
import path from "node:path";
import assert from "node:assert/strict";
const base = process.argv[3] || "http://127.0.0.1:3000";
const root = process.cwd();
const output = path.join(root, ".omx/portfolio-refresh/after");
const routes = ["/", "/work", "/career", "/teaching", "/projects/syu-likelion", "/projects/eodiya", "/projects/oshi-calendar", "/projects/cctv-scheduler"];
let browser;
(async () => {
  await fs.mkdir(output, {recursive:true});
  browser = await chromium.launch({executablePath:"C:/Program Files/Google/Chrome/Application/chrome.exe", headless:true});
  const context = await browser.newContext({reducedMotion:"reduce"});
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", e => errors.push(e.message));
  const layouts = [];
  for (const theme of ["light","dark"]) {
    await page.emulateMedia({colorScheme:theme});
    await page.goto(base);
    await page.evaluate(theme => localStorage.setItem("theme",theme), theme);
    for (const viewport of [{width:1440,height:900},{width:390,height:844}]) {
      await page.setViewportSize(viewport);
      for (const route of routes) {
        const response = await page.goto(base+route);
        assert.equal(response.status(),200);
        await page.evaluate(()=>document.fonts.ready);
        assert.equal(await page.locator("h1").count(),1,route+" h1");
        assert.equal(await page.locator("main#content").count(),1);
        assert.equal(await page.locator("#contact").count(),1);
        assert.equal(await page.locator('nav[aria-label="사이트 탭"] [aria-current="page"]').count(),1);
        assert.equal(await page.locator("html").getAttribute("data-theme"),theme);
        const dimensions = await page.evaluate(()=>({width:innerWidth,scrollWidth:document.documentElement.scrollWidth}));
        assert.ok(dimensions.scrollWidth<=dimensions.width, route+" overflow");
        const ids = await page.locator("[id]").evaluateAll(els=>els.map(e=>e.id));
        assert.equal(new Set(ids).size, ids.length, route+" duplicate ids");
        if(route==="/") {
          assert.match(await page.locator("h1").innerText(), /프론트엔드 개발자/);
          const image = await page.locator("main img").first().boundingBox();
          assert.ok(image.y < viewport.height, "Home image starts above fold");
          if(viewport.width===1440) {
            const figure = await page.locator("main figure").first().boundingBox();
            assert.ok(figure.y+figure.height<=viewport.height,"Home project and metrics above fold");
          }
        }
        for(const img of await page.locator("main img").all()) {
          await img.scrollIntoViewIfNeeded();
          await img.evaluate(el=>el.decode());
          assert.ok((await img.getAttribute("alt"))?.length);
        }
        await page.evaluate(()=>scrollTo(0,0));
        const name = (route==="/" ? "home":route.slice(1).replaceAll("/","-"))+"-"+viewport.width+"-"+theme;
        await page.screenshot({path:path.join(output,name+".png"),fullPage:true,animations:"disabled"});
        layouts.push({route,theme,width:viewport.width,h1:await page.locator("h1").innerText(),height:await page.evaluate(()=>document.documentElement.scrollHeight),pass:true});
      }
    }
  }
  await page.setViewportSize({width:320,height:844});
  for(const route of routes) {
    await page.goto(base+route);
    assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),route+" 320 overflow");
    const active=page.locator('nav[aria-label="사이트 탭"] [data-active]');
    await active.waitFor();
    await page.waitForFunction(()=>{const e=document.querySelector('nav[aria-label="사이트 탭"] [data-active]');const a=e.getBoundingClientRect(), b=e.closest("ul").getBoundingClientRect();return a.left>=b.left-1&&a.right<=b.right+1;});
  }
  for (const viewport of [{width:1440,height:900},{width:390,height:844}]) {
  await page.setViewportSize(viewport);
  await page.goto(base+"/projects/syu-likelion");
  for(let i=1;i<=12;i++){
    const id="section-"+String(i).padStart(2,"0");
    assert.equal(await page.locator("#"+id).count(),1);
    await page.evaluate(id=>{location.hash=id;},id);
    await page.waitForFunction(id=>{const y=document.getElementById(id).getBoundingClientRect().top;const chrome=document.querySelector('nav[aria-label="사이트 탭"]').getBoundingClientRect().bottom;return y>=chrome-1&&y<innerHeight;},id);
  }
  assert.equal(await page.locator("main article section h2").count(),7);
  }
  for(const viewport of [{width:1440,height:900},{width:390,height:844}]) {
    await page.setViewportSize(viewport);
    for(const route of routes) {
      await page.goto(base+route);
      await page.keyboard.press('Tab');
      await page.locator('#contact a[href^="mailto:"]').first().focus();
      const email=await page.locator('#contact a[href^="mailto:"]').first().getAttribute("href");
      assert.equal(email,"mailto:joungou.park@gmail.com");
      const outline=await page.evaluate(()=>getComputedStyle(document.activeElement).outlineStyle);
      assert.notEqual(outline,"none");
    }
  }
  // Three theme states: persistence and following OS without a data-theme attribute.
  await page.goto(base);
  await page.evaluate(()=>localStorage.removeItem("theme"));
  await page.reload();
  for(const expected of ["light","dark",null]){
    await page.getByRole("button",{name:/테마/}).click();
    assert.equal(await page.locator("html").getAttribute("data-theme"),expected);
    await page.reload();
    assert.equal(await page.locator("html").getAttribute("data-theme"),expected);
  }
  const papers=[];
  for(const colorScheme of ["light","dark"]){
    await page.emulateMedia({colorScheme});
    papers.push(await page.evaluate(()=>getComputedStyle(document.documentElement).getPropertyValue("--color-paper").trim()));
    assert.equal(await page.locator("html").getAttribute("data-theme"),null);
  }
  assert.notEqual(papers[0],papers[1]);
  // Keyboard skip link and actual page-navigation links.
  await page.goto("about:blank");
  await page.goto(base);
  await page.keyboard.press("Tab");
  assert.equal(await page.evaluate(()=>document.activeElement.getAttribute("href")),"#content");
  await page.keyboard.press("Enter");
  assert.equal(await page.evaluate(()=>document.activeElement.id),"content");
  const nav=page.getByRole("navigation",{name:"사이트 탭"});
  for(const label of ["Work","Career","Teaching","Home"]){
    await nav.getByRole("link",{name:label,exact:true}).focus();
    await page.keyboard.press("Enter");
    await page.waitForURL(base+(label==="Home"?"/":"/"+label.toLowerCase()));
  }
  await page.goto(base+"/projects/syu-likelion");
  await page.getByRole("navigation",{name:"다른 프로젝트"}).getByRole("link").last().click();
  await page.waitForURL(base+"/projects/eodiya");
  await page.getByRole("navigation",{name:"다른 프로젝트"}).getByRole("link").first().click();
  await page.waitForURL(base+"/projects/syu-likelion");
  await page.getByRole("link",{name:"syu-likelion 탭 닫기"}).click();
  await page.waitForURL(base+"/work");
  for(const route of routes){
    await page.goto(base+route);
    await page.evaluate(()=>{location.hash="contact";});
    await page.waitForFunction(()=>{const r=document.querySelector("#contact").getBoundingClientRect();return r.top<innerHeight&&r.bottom>0;});
  }
  const notFound=await page.goto(base+"/projects/not-a-project");
  assert.equal(notFound.status(),404);
  const og=[];
  for(const route of ["/opengraph-image",...routes.filter(r=>r.startsWith("/projects/")).map(r=>r+"/opengraph-image")]){
    const response=await context.request.get(base+route);
    assert.equal(response.status(),200);
    assert.match(response.headers()["content-type"],/^image\//);
    const bytes=await response.body(); assert.ok(bytes.length>1000);
    og.push({route,status:200,bytes:bytes.length});
    if(route==="/opengraph-image")await fs.writeFile(path.join(output,"home-og.png"),bytes);
  }
  assert.deepEqual(errors,[]);
  await fs.writeFile(path.join(output,"checks.json"),JSON.stringify({layouts,narrowLayouts:8,oldSyuAnchors:12,themeCycle:true,systemOS:true,keyboard:true,contact:true,projectNavigation:true,notFound:404,og,errors},null,2));
  await browser.close();
  console.log(JSON.stringify({layouts:layouts.length,narrowLayouts:8,oldSyuAnchors:12,themeCycle:true,keyboard:true,contact:true,projectNavigation:true,og:og.length,notFound:404,errors},null,2));
})().catch(error=>{console.error(error);process.exitCode=1;}).finally(()=>browser?.close());
