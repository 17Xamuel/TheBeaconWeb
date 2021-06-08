const request = XMLHttpRequest;
const fd = FormData;
const d = document;

const dq = d.querySelector;

async function sbt(f, url, type = "POST") {
  let res = "empty";
  let _fcontent = {};
  f = new fd(f);
  f.forEach((value, key) => {
    _fcontent[key] = value;
  });
  //   let req = new request();
  //   req.open(type, url, true);
  //   req.setRequestHeader("Content-type", "application/json");
  //   req.send(_fcontentJson);
  //   req.onreadystatechange = () => {
  //     if (req.status == 200 && req.readyState == 4) {
  //       res = req.responseText;
  //     }
  //   };
  const _res = await fetch(url, {
    method: type,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(_fcontent),
  });
  return _res.json();
}
