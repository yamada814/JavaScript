function JapanesePerson(firstname, lastname){
    this.firstname = firstname;
    this.lastname = lastname;
    // this.getFullname = function(){
    //     return this.lastname + this.firstname;
    //新しく作成したオブジェクトのプロパティにgetFullnameメソッドを追加することになる
// }

}
//JapanesePerson関数オブジェクトのprototypeプロパティにgetFullname()メソッドを追加する
//new演算子で新しく作成したオブジェクトの__proto__がそれを参照する
JapanesePerson.prototype.getFullname = function(){
    return this.lastname + this.firstname;
}
JapanesePerson.prototype.getNationality = function(){
    return this.nationality;
}
JapanesePerson.prototype.nationality = "Japan";
JapanesePerson.nationality = "Korea";

const person = new JapanesePerson("太郎", "湘南");
//コンストラクタ関数からnewで作ったオブジェクトpersonのもつ__proto__が参照するのは、
//JapanesePerson関数オブジェクトではなくJapanesePersonがもつprototypeプロトタイプオブジェクト
//personがもつメソッドを定義したいなら、JapanesePerson.prototype.メソッド名 = func(){}で定義する

// console.log(person);
console.log(person.getFullname());
console.log(JapanesePerson.nationality);//Korea
console.log(person.getNationality());//Japan
