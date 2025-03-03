function App({ count }) {
  return `<div>
    App ${count}
</div>`;
}

const app = App({ count: 1 });
// document.body.innerHTML = App({ count: 0 })
console.log(app);
