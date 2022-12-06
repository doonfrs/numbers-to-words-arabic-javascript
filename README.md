# NumberToWords in Arabic for Javascript

I have the class already from here: https://www.ar-php.org/ar-example-Numbers-php-arabic.html
You can find the enhanced php version from here: https://github.com/doonfrs/numbers-to-words-arabic-php
* I added the currency / fraction
* Better support for single / plural
* Fixed some bugs

Then migrated to javascript
You may find some functions like number_format, isset ... that made it easier for me to migrate the code and keep them similar for future enhancements because I focus on PHP version first.

Still need to work on feminine rules, also in arabic sometimes you need to switch the currency / number position like هللة واحدة instead of واحد هللة but it is till readable and correct.
If you used the code and you made any optimization, kindly fork / request merge.


```javascript
console.log(NumberToWords.convertNumberAr(1, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ريال سعودي واحد
console.log(NumberToWords.convertNumberAr(2, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'اثنان ريال سعودي 
console.log(NumberToWords.convertNumberAr(3, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ثلاثة ريالات سعودية
console.log(NumberToWords.convertNumberAr(4, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'أربعة ريالات سعودية
console.log(NumberToWords.convertNumberAr(5, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'خمسة ريالات سعودية
console.log(NumberToWords.convertNumberAr(6, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ستة ريالات سعودية
console.log(NumberToWords.convertNumberAr(7, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'سبعة ريالات سعودية
console.log(NumberToWords.convertNumberAr(8, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ثمانية ريالات سعودية
console.log(NumberToWords.convertNumberAr(9, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'تسعة ريالات سعودية
console.log(NumberToWords.convertNumberAr(10, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'عشرة ريالات سعودية
console.log(NumberToWords.convertNumberAr(11, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'أحد عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(12, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'اثنا عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(13, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ثلاثة عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(14, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'أربعة عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(15, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'خمسة عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(16, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ستة عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(17, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'سبعة عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(18, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ثمانية عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(19, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'تسعة عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(20, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'عشرون ريال سعودي 
console.log(NumberToWords.convertNumberAr(21, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'واحد وعشرون ريال سعودي 
console.log(NumberToWords.convertNumberAr(100, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'مئة ريال سعودي 
console.log(NumberToWords.convertNumberAr(101, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'مئة وواحد ريال سعودي 
console.log(NumberToWords.convertNumberAr(111, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'مئة وأحد عشر ريال سعودي 
console.log(NumberToWords.convertNumberAr(121, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'مئة وواحد وعشرون ريال سعودي 
console.log(NumberToWords.convertNumberAr(200, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'مئتا ريال سعودي 
console.log(NumberToWords.convertNumberAr(1.1, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ريال سعودي واحد، وواحد هللة
console.log(NumberToWords.convertNumberAr(1.2, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ريال سعودي واحد، واثنان هللة
console.log(NumberToWords.convertNumberAr(1.3, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ريال سعودي واحد، وثلاثة هللات
console.log(NumberToWords.convertNumberAr(1.42, 'ريال سعودي','ريالات سعودية','هللة','هللات')); // => 'ريال سعودي واحد، واثنان وأربعون هللة
console.log(NumberToWords.convertNumberAr(101.15, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'مئة وواحد ريال سعودي ، وخمسة عشر هللة'
console.log(NumberToWords.convertNumberAr(101.16, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'مئة وواحد ريال سعودي ، وستة عشر هللة'
console.log(NumberToWords.convertNumberAr(1001.1, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'ألف وواحد ريال سعودي ، وواحد هللة'
console.log(NumberToWords.convertNumberAr(1001.2, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'ألف وواحد ريال سعودي ، واثنان هللة'
console.log(NumberToWords.convertNumberAr(1095.3, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'ألف وخمسة وتسعون ريال سعودي ، وثلاثة هللات'
console.log(NumberToWords.convertNumberAr(1095.42, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'ألف وخمسة وتسعون ريال سعودي ، واثنان وأربعون هللة'
console.log(NumberToWords.convertNumberAr(10000, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'عشرة آلاف ريال سعودي '
console.log(NumberToWords.convertNumberAr(10001, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'عشرة آلاف وواحد ريال سعودي '
console.log(NumberToWords.convertNumberAr(10011, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'عشرة آلاف وأحد عشر ريال سعودي '
console.log(NumberToWords.convertNumberAr(11321, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'أحد عشر ألف وثلاثمئة وواحد وعشرون ريال سعودي '
console.log(NumberToWords.convertNumberAr(1000000, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'مليون ريال سعودي '
console.log(NumberToWords.convertNumberAr(1000000.23, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'مليون ريال سعودي ، وثلاثة وعشرون هللة'
console.log(NumberToWords.convertNumberAr(1922140.132, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات')); // => 'مليون وتسعمئة واثنان وعشرون ألف ومئة وأربعون ريال سعودي ، وثلاثة عشر هللة'

```
