import glob

for file in glob.glob("assets/*.js"):
    src = open(file, "r", encoding="utf-8").read()
    original = src
    src = src.replace('"/generator/image"', '"/pixai"')
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
    open(file, "w", encoding="utf-8").write(src)