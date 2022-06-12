class Formatter {
  static capitalize(string){
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "");
  }

  static titleize(string){
    let words = string.toLowerCase().split(" ");
    let filter = words.map(element => {
      if(element === "the" || element === "a" || element === "an" || element === "but" || element === "of" || element === "and" || element === "for" || element === "at" || element === "by" || element === "from"){
        return element;
      } else {
        return this.capitalize(element)
      }
    })
    let joinedFilter = filter.join(" ").slice(1);
    return this.capitalize(string[0]) + joinedFilter;
}

}
