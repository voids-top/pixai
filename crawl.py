import requests
import re

html = requests.get("https://pixai.art").text

base_url = re.search(r"https://cdn.pixai.art/artifacts/[a-zA-Z0-9\-_\.]+/assets", html).group(0)
cdn_regex = r"https://cdn.pixai.art/artifacts/[a-zA-Z0-9\-_/\.]+"
module_regex = r"/[a-zA-Z0-9\-_\.]+\.js"
urls = set()
done = set()

open("index.html", "w", encoding="utf-8").write(html.replace(base_url, "/pixai/assets"))
for match in re.findall(cdn_regex, html):
    urls.add(match)

while True:
    if not urls:
        break
    url = urls.pop()
    if url in done:
        continue
    print(url)
    r = requests.get(url)
    if r.status_code != 200:
        continue
    src = r.content
    open("assets/" + url.split("/")[-1], "wb").write(src)
    #print(src[0:100])
    for module in re.findall(module_regex, src.decode("utf-8")):
        module = base_url + module
        if not module in done:
            urls.add(module)
    done.add(url)