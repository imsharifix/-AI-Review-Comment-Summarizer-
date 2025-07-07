// نظرات تستی - در صورت نیاز از API یا فایل JSON بارگذاری کن
const comments = [
  { author: "Mohammad", text: "The build quality is excellent and the packaging was very nice." },
  { author: "Sarah", text: "I am very satisfied with my purchase, especially the stylish design." },
  { author: "Ali", text: "It arrived on time and the quality exceeded my expectations." },
  { author: "Bardia", text: "Very good, especially the delicate design and neat packaging." },
  { author: "Mina", text: "Worth the price, I had a good experience." },
  { author: "Mehdi", text: "Good appearance, good performance, everything is great." },
  { author: "Narges", text: "I ordered two and both arrived intact." },
  { author: "Reza", text: "The price is a bit high but the quality makes up for it." },
  { author: "Elham", text: "The battery drains quickly, I expected more." },  // negative
  { author: "Saman", text: "The delivery was late and customer support was unresponsive." }  // negative
];




const container = document.getElementById("comments-container");



comments.forEach(comment => {
  const div = document.createElement("div");
  div.className = "comment-box";

  div.innerHTML = `
    <div class="comment-author">${comment.author}</div>
    <div class="comment-text">${comment.text}</div>
  `;

  container.appendChild(div);
});

// type yor token here
const token = "ُType your token here";

window.addEventListener('load', () => summarizeComments());
async function summarizeComments() {
   const fullText = comments.map(c => c.text).join(". ");

  // مرحله 2: درخواست به Hugging Face API
  // type your api link here
  const response = await fetch("Type Your Api Here", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${token}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ inputs: fullText })
  });

  const data = await response.json();
  const summary = data[0]?.summary_text || "نتونست خلاصه کنه.";

  // مرحله 3: نمایش نتیجه در صفحه
  document.getElementById("summary-box").innerText = `Ai Summary : ${summary}`;

 console.log("Raw response:", data);

}
