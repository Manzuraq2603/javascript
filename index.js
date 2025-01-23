"use strict";
"Js introduction  |  Variables  |  Data Types";
// 1.Bizga 2ta son berilgan ularning yig'indisini topuvchi dastur tuzing.(-7,10)
// let a = -7;
// let b = 10;
// console.log(a+b);

// 2.Berilgan santimetr necha metrligini aniqlovchi dastur tuzing.(100sm=1m)
// let sm = 1500;
// console.log(sm/100 +"metr");

// 3.Berilgan kilogram necha tonnaligini aniqlovchi dastur tuzing.(1000kg=1t)
// let kg = 350;
// console.log(kg/1000 + "tonna");

// 4.Bizga a=5,b=9,c=7, sonlari berilgan.Ularning o'rta arfimetigini aniqlovchi dastur tuzing.
// let a = 5;
// let b = 9;
// let c = 7;
// console.log((a + b + c) / 3);

// // 5.Bizga yosh berilgan.Yosh necha kunligini aniqlovchi dastur tuzing.
// let a = 23;
// console.log(a*365+"kun");

// 6.Bizga soat berilgan.Uning necha sekund ekanligini aniqlovchi dastur tuzing.
// let a = 3;
// let minut = 3 * 60;
// let sekund = minut * 60;
// console.log(sekund + "sekund");

// 7.Fermada tovuq,sigir va chochkalar bor.Hayvonlar soniga ko'ra ularning umumiy ooqlari sonini aniqlovchi dastur tuzin.(Soni=2,4,5; Natija = 40)
// let hen = 2;
// let cow = 4;
// let pig = 5;
// console.log(hen * 2 + cow * 4 + pig * 4);

// 8.Ikkta son berilgan.Ularning qiymatlari o'rnini almashtiruvchi dastur tuzing.
// let a = 8;
// let b = 5;
// let c = 0;
// c=a
// a=b
// b=c
// console.log(a,b);

// 9.Ikki xonalik son berilgan.Uning raqamlar yig'indisini aniqlovchi dastur tuzing.
// let a = 67;
// let birlik = a % 10;
// let onlik = (a - birlik) / 10;
// console.log(birlik + onlik);

// 10.Ikki xonalik son berilgan.Uning raqamlari o'rnini almashtirishdan hosil bo'lgan sonni aniqlovchi dastur tuzing.
// let a = 63;
// let birlik = a % 10;
// let onlik = (a - birlik) / 10;
// let b = 0;
// b = birlik;
// birlik = onlik;
// onlik = b;
// console.log(onlik,birlik);

// 11.Uch xonalik son berilgan.Uning yuzlar xonasidagi raqamini aniqlovchi dastur tuzing.
// let a = 836;
// let onlik = a % 100;
// let birlik = onlik % 10;
// let yuzlik = (a - onlik) / 100;
// console.log(yuzlik);

// 12.Uch xonalik son berilgan.Uning raqamlari yig'indisini aniqlovchi dastur tuzing.
// let a = 587;
// let onlik1 = a % 100;
// let birlik = onlik1 % 10;
// let yuzlik = (a - onlik1) / 100;
// let onlik2 = (onlik1 - birlik) / 10;
// console.log(yuzlik + onlik2 + birlik);

// 13.Uch honalik son berilgan.Uning raqamlarni taskari tartibda yozishdan hosil bo'lgan sonni aniqlovchi dastur tuzing.
// let a = 256;
// let onlik56 = a % 100;
// let birlik = onlik56 % 10;
// let onlik5 = (onlik56 - birlik) / 10;
// let yuzlik = (a - onlik56) / 100;
// let b = 0;
// b = birlik;
// birlik = yuzlik;
// yuzlik = b;
// console.log(yuzlik,onlik5,birlik);

// 14.Uch xonalik son berilgan.Uning o'nliklar xonasidagi raqam bilan yuzliklar xonasidagi raqamni almashtirishdan hosil bo'lgan sonni aniqlovchi dastur tuzing.(Kirish=123;Natija=213;)
// let a = 123;
// let onlik23 = a % 100;
// let birlik = onlik23 % 10;
// let yuzlik = (a - onlik23) / 100;
// let onlik2 = (onlik23 - birlik) / 10;
// let b = 0;
// b = yuzlik;
// yuzlik = onlik2;
// onlik2 = b;
// console.log(yuzlik, onlik2, birlik);

// 15.Ikkta son berilgan.Ularning qiymatlarini qo'shimcha o'zgartiruvchi ishlatmasdan o'rnini almashtiruvchi dastur tuzing.
// chala!!1

"Math  |  Operators |  Comparisons";
// 1.A butun son berilgan.jumlani rostlikka tekshiring.A mubat son.
// let a = 2;
// console.log(a > 0);

// 2.A butun son berilgan.Jumlani rostlikka tekshiring.A toq son.
// let a = 8;
// console.log(a % 2 == 1);

// 3.A butun son berilgan.Jumlani rostlikka tekshiring.A soni juft son.
// let a = 6;
// console.log(a % 2 == 0);

// 4.Ikkta A va B sonlar berilgan.Jumlani rostlikka tekshiring.A > 2 va B < 3
// let a = 3;
// let b = -6;
// console.log(a > 2 && b < -2);

// 5.Ikkta A va B sonlar berilgan.Jumlani rostlikka tekshiring.A <= 0 va B < -2
// let a = 0;
// let b = -6;
// console.log(a <= 0 && b < -2);

// 6.Uchta A,B,C butun sonlar berilgan.Jumlani rostlikka tekshiring.B soni A va C sonlari orasida yotadi.
// let a = 2;
// let b = 6;
// let c = -6;
// console.log(b > a && b < c);

// 7.Ikkta A va B sonlar berilgan.Jumlani rostlikka tekshiring.A va B sonlari toq sonlar.
// let a = 0;
// let b = 3;
// console.log(a % 2 == 1 && b % 2 == 1);

// 8.Ikkta butun A va B sonlar berilgan.Jumlani rostlikka tekshiring.A va B sonning hech bo'lmasa bittasi toq.
// let a = 2;
// let b = 5;
// console.log(a % 2 == 1 || b % 2 == 1);

// 9.Ikkta butun A va B sonlar berilgan.Jumlani rostlikka tekshiring.A va B sonlarning har ikkalasi ham yoki toq yoki juft sonlar.
// let a = 6;
// let b = 7;
// console.log((a % 2 == 1 && b % 2 == 1) || (a % 2 == 0 && b % 2 == 0));

// 10.Uchta A,B,C butun sonlar berilgan.Jumlani rostlikka tekshiring.Sonlarning har biri musbat.
// let a = 2;
// let b = -4;
// let c = 9;
// console.log(a > 0 && b > 0 && c > 0);

// 11.Uchta A,B,C butun sonlar berilgan.Jumlani rostlikka tekshiring.Sonlarni hech bo'lmasa bittasi musbat.
// let a = 2;
// let b = -4;
// let c = 7;
// console.log(a > 0 || b > 0 || c > 0);

// 12.Ikkta A va B butun sonlar berilgan.Jumlani rostlikka tekshiring.Sonlardan faqat bittasi musbat.
// let a = 2;
// let b = -1;
// console.log(a > 0 || b > 0);

"If else  |  Ternary operators  |  Switch";
// 1.Ixtiyoriy A sonini juft yoki toqligini aniqlang.Agar A soni juft bo'lsa console da "A soni juft" degan aks holda "A soni toq" habar chiqaring.
// let a = 9;
// if (a % 2 == 0) {
//   console.log(a + "-soni juft");
// } else {
//   console.log(a + "-soni toq");
// }

// 2.Kiritilgan 2ta sonning absolyut farqi(kattasidan kichigining ayirmasini) aniqlovchi dastur tuzing.
// let a = 4;
// let b = -7;
// if (a > b) {
//   console.log(a - b);
// } else {
//   console.log(b - a);
// }

// 3.Agar kiritilgan son 3ga va 5ga karrali yoki manfiy bo'lmasa ushbu sonning kvadratini aks holda kubini hisoblash dasturini tuzing.
// let a = -4;
// if ((a % 3 == 0 && a % 5 == 0) || a > 0) {
//   console.log(a ** 2);
// } else {
//   console.log(a ** 3);
// }

// 4.Butun son berilgan.Agar berilgan son musbat bo'lsa 1ga oshiring aks holda 2ga kamaytiring.Hosil bo'lgan sonni ekranga chiqaring.
// let a = -7;
// if (a > 0) {
//   let res = ++a;
//   console.log(res);
// } else {
//   console.log(a);
// }

// 5.Butun son berilgan.Agar berilgan son musbat bo'lsa 1ga oshiring aks holda 2ga kamaytiting.Hosil bo'lgan sonni ekranga chiqaring.
// let a = 5;
// if (a > 0) {
//   let res = ++a;
//   console.log(res);
// } else {
//   console.log(a + 2);
// }

// 6.Butun son berilgan.Agar berilgan son musbat bo'lsa 1ga oshiring,Agar manfiy bo'lsa 2ga kamaytiring.Agar 0 ga teng bo'lsa o'zgartirilmasin.Hosil bo'lgan sonni ekranga chiqaring.
// let a = 0;
// if (a > 0) {
//   let res = ++a;
//   console.log(res);
// } else if ((a = 10)) {
//   console.log(a);
// } else {
//   console.log(a - 2);
// }

// 7.Uchta butun son berilgan.Shu sonlar orasida nechta musbat son borligini aniqlovchi dastur tuzing.
// let a = 7;
// let b = -1;
// let c = 3;
// chala!!!

// 8.Ikkta butun son berilgan.Shu sonlarning Kattasini aniqlovchi dastur tuzing.
// let a = 2;
// let b = 9;
// if (a > b) {
//   console.log(a + "-soni katta");
// } else {
//   console.log(b + "-soni katta");
// }

// 9.A va B sonlari berilgan.Agar sonlar o'zaro teng bo'lmasa ularning yig'indisini,agar teng bo'lsa 0 ni ekranga chiqaruvchi dastur tuzing.
// let a = 2;
// let b = 2;
// if (a != b) {
//   console.log(a + b);
// } else {
//   console.log(0);
// }

// 10.Uchta son berilgan.Shu sonlarni o'rtachasini aniqlovchi dastur tuzing.
// let a = 3;
// let b = 7;
// let c = -1;
// if (a > b && b > c) {
//     console.log(b+"-soni o'rtacha");

// } else {
// }
// chala!!!

// 11.Hafta kunlari(1-7gacha) sonda kiritiladi.Shu songa mas hafta kunini ekranga chiqazuvchi dastur tuzing.
// let a = 8;
// switch (a) {
//   case 1:
//     console.log("Dushanba");
//     break;
//   case 2:
//     console.log("Seshanba");
//     break;
//   case 3:
//     console.log("Chorshanba");
//     break;
//   case 4:
//     console.log("Payshanba");
//     break;
//   case 5:
//     console.log("Juma");
//     break;
//   case 6:
//     console.log("Shanba");
//     break;
//   case 7:
//     console.log("Yakshanba");
//     break;
//   default:
//     console.log("Xato");
//     break;
// }

// 12.Butun son berilgaan.Baho natijalarini aniqlovchi dastur tuzing.(1-yomon,2-qoniqarsz,3-qoniqarli,4-yahshi,5-a'lo).Agar son 1-5 oraliqqa tegishli bo'lmasa "xato" deb chiqaring.
// let a = 6;
// switch (a) {
//     case 1:
//         console.log("Yomon");
//         break;
//         case 2:
//         console.log("Qoniqarsiz");
//         break;
//         case 3:
//         console.log("Qoniqarli");
//         break;
//         case 4:
//         console.log("Yahshi");
//         break;
//         case 3:
//         console.log("A'lo");
//         break;
//     default:
//         console.log("Xato");
//         break;
// }

// 13.Oy raqami berilgan.Kiritilgan oy qaysi fasilga tegishli ekanligini aniqlovchi dastur tuzing.Masalan 2chi oy "qish"
// let a = 1;
// switch (a) {
//   case 1:
//     console.log(a + "-oy qish");
//     break;
//     case 2:
//     console.log(a + "-oy qish");
//     break;
//     case 3:
//     console.log(a + "-oy bahor");
//     break;
//     case 4:
//     console.log(a + "-oy bahor");
//     break;
//     case 5:
//     console.log(a + "-oy bahor");
//     break;
//     case 6:
//     console.log(a + "-oy yoz");
//     break;
//     case 7:
//     console.log(a + "-oy yoz");
//     break;
//     case 8:
//     console.log(a + "-oy yoz");
//     break;
//     case 9:
//     console.log(a + "-oy kuz");
//     break;
//     case 10:
//     console.log(a + "-oy kuz");
//     break;
//     case 11:
//     console.log(a + "-oy kuz");
//     break;
//     case 12:
//     console.log(a + "-oy qish");
//     break;

//   default:
//     console.log("xato");
//     break;
// }

"Loops - For  |  While  |  Do while";
// 1. 1dan 10gacha bo'lgan butun sonlarni ekranga chiqaruvchi dastur tuzing.
// for (let i = 1; i < 10; i++) {
//   console.log(i);
// }

// 2. 1dan 10gacha bo'lgan butun sonlarni teskari yani(10-1) ekranga chiqaruvchi dastur tuzing.
// for (let i = 10; i >= 1; i--) {
//   console.log(i);
// }

// 3. k va n butun son berilgan (n>0) k sonni n marta chiqaruvchi dastur tuzing.
// let k = 8;
// let n = 16;
// for (let i = 1; i <= n; i++) {
//   console.log(k);
// }

// 4. 1 dan 30gacha bo'lgan butun sonlarni faqat toqlarini ekranga chiqaruvchi dastur tuzing.
// for (let i = 1; i < 30; i++) {
//   if (i % 2 == 1)
//     console.log(i);
// }

// 5. 0 dan kiritilgan songacha bo'lgan butun sonlar yig'indisini hisoblovchi dastur tuzing.
// let a = 21;
// let res = 0;
// for (let i = 0; i <= a; i++) {
//    res = res + i;
// }
// console.log(res);

// 6. 0 dan kiritilgan songacha bo'lgan juft sonlarni yig'indisini hisoblovchi dastur tuzing.
// let a = 31;
// let res = 0;
// for (let i = 0; i <= a; i++) {
//   if (i % 2 == 0)
//     res = res + i;
// }
// console.log(res);

// 7.Berilgan x va y sonlar orasidagi p ga karrali sonlarni ekranga chiqaruvchi dastur tuzing.
// let x = 2;
// let y = 56;
// for (let i = x; i <= y; i++) {
//   if (i % 5 == 0)
//     console.log(i);
// }

// 8.Bir kg konfet narxi berilgan 1,2,...,10kg konfet narxini hisoblovchi dastur tuzing.
// let kg = 5000;
// for (let i = kg; i <= 10; i++) {
//   console.log(i);
// }
// chala

// 9.To'rtxonalik sonlar orasida 47ga bo'lganda qoldiq 43ga teng bo'lgan sonlarni topuvchi dastur tuzing.
// for (let i = 1000; i <= 9999; i++) {
//   if (i % 47 == 43)
//     console.log(i);
// }

// 10. 1dan n sonigacha bo'lgan toq sanlarni (% ishlatmasdan) ekranga chiqaruvchi dastur tuzing.
// let n = 56;
// for (let i = 1; i <= n; i +=2 ) {
//   console.log(i);
// }
