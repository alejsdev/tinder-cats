class Cat {
  constructor(data) {
    Object.assign(this, data);
  }

  getCatHtml() {
    const { name, avatar, age, bio } = this;

    return `<div class="cat-card">
      <img class="cat-img" src="${avatar}" />
        <div class="cat-description">
          <h4 class="cat-name"> ${name}, ${age} </h4>
          <p>${bio}</p>
        </div>
    </div>
  `;
  }
}

export default Cat;
