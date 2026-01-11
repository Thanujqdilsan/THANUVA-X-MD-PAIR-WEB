async function pair() {
  const number = document.getElementById("number").value;
  const msg = document.getElementById("msg");
  const codeBox = document.getElementById("code");

  if (!number) {
    msg.innerText = "Enter your WhatsApp number!";
    return;
  }

  msg.innerText = "Please wait...";
  codeBox.innerText = "";

  const res = await fetch("/pair", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ number })
  });

  const data = await res.json();

  if (data.success) {
    msg.innerText = "Your Pair Code:";
    codeBox.innerText = data.code;
  } else {
    msg.innerText = data.message;
  }
                                         }
