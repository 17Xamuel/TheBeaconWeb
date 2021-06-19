const request = XMLHttpRequest;
const fd = FormData;
const d = document;

const dq = d.querySelector;

async function sbt(f, url, type = "POST") {
  let _fcontent = {};
  f = new fd(f);
  f.forEach((value, key) => {
    _fcontent[key] = value;
  });

  const _res = await fetch(url, {
    method: type,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_fcontent),
  });
  return _res.json();
}
