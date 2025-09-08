import glob

for file in glob.glob("assets/*.js"):
    src = open(file, "r", encoding="utf-8").read()
    original = src
    src = src.replace('"/generator/image"', '"//pixai"')
    if src != original:
        original = src
        print("[1] patched", file)
    src = src.replace("https://api.pixai.art", "https://capi.voids.top")
    if src != original:
        original = src
        print("[2] patched", file)
    src = src.replace('.includes("api.pixai.art")', '.includes(".")')
    if src != original:
        original = src
        print("[3] patched", file)
    if 'title:"common:home.label"' in src:
        index1 = src.index('title:"common:home.label"')
        index2 = src[index1:].index('link:')
        if src[index1+index2:index1+index2+8] == 'link:"/"':
            src = src[:index1+index2] + 'link:"/pixai"'+ src[index1+index2+8:]
    if src != original:
        original = src
        print("[4] patched", file)
    if 'function setLocaleToUrl(' in src:
        index1 = src.index('function setLocaleToUrl(')
        index2 = src[index1:].index('){')
        src = src[:index1+index2+2] + 'if(true){return}'+ src[index1+index2+2:]
    if src != original:
        original = src
        print("[5] patched", file)
    open(file, "w", encoding="utf-8").write(src)