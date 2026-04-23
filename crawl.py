import requests
import re
import os

html = requests.get("https://pixai.art").text

base_url = re.search(r"https://cdn.pixai.art/artifacts/[a-zA-Z0-9\-_\.]+/assets", html).group(0)
cdn_regex = r"https://cdn.pixai.art/artifacts/[a-zA-Z0-9\-_/\.]+"
module_regex = r"(/[a-zA-Z0-9\-_\.]+\.(js|css|png))"
urls = set()
done = set()

open("index.html", "w", encoding="utf-8").write(html.replace("cdn.pixai.art", "pixai.voids.top"))
open("404.html", "w", encoding="utf-8").write(html.replace("cdn.pixai.art", "pixai.voids.top"))
for match in re.findall(cdn_regex, html):
    urls.add(match)

while True:
    if not urls:
        break
    url = urls.pop()
    if url in done:
        continue
    filename = url.replace("https://cdn.pixai.art/", "")
    if os.path.isfile(filename):
        continue
    print(url)
    r = requests.get(url)
    if r.status_code != 200:
        continue
    src = r.content
    folder = "/".join(filename.split("/")[:-1])
    #print(folder, filename)
    os.makedirs(folder, exist_ok=True)
    open(filename, "wb").write(src.replace(b"cdn.pixai.art", b"pixai.voids.top"))
    #print(src[0:100])
    try:
        for module in re.findall(module_regex, src.decode("utf-8")):
            module = base_url + module[0]
            if not module in done:
                urls.add(module)
    except:
        pass
    done.add(url)