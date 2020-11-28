const user = {
      name: 'Mango',
      age: 20,
      hobby: 'html',
      premium: true,
      toShowKeys() {
        console.log(this.name, this.age, this.hobby, this.premium, this.mood);
      }
    };

    user.mood = "happy";
    user.hobby = "skydiving";
    user.premium = "false";

    const keys = Object.keys(user);

    for (const key of keys) {
      console.log(`${key}: ${user[key]}`);
    }