class Dog {
  constructor(data) {
    Object.assign(this, data);
  }

  getDogHTML() {
    const { name, avatar, age, bio } = this;

    return `<div class="dog-card">
    <h4 class="name"> ${name} </h4>
    <img class="avatar" src="${avatar}" />
    <div class="age">Age: <b> ${age} </b></div>
    <div class="bio">
        ${bio}
    </div>
</div>`;
  }
}

export default Dog;
