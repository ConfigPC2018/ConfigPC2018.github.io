function TCSSetCookie(){TCSExtSetCookie("kupivkredit",1,false,"/")}function TCSClearCookie(){TCSExtSetCookie("kupivkredit",0,false,"/")}function TCSBuyClick(b){if(obj=BX(b)){TCSSetCookie();obj.click()}}function TCSExtSetCookie(g,k,h,i,l,j){document.cookie=g+"="+escape(k)+((h)?"; expires="+h:"")+((i)?"; path="+i:"")+((l)?"; domain="+l:"")+((j)?"; secure":"")};