class NumberToWords
{
    static convertNumberArRiyal(number)
    {
        return this.convertNumberAr(number, 'ريال سعودي', 'ريالات سعودية', 'هللة', 'هللات');
    }

    static convertNumberAr(
        number,
        currency,
        currencyPlural,
        currencyFraction,
        currencyFractionPlural
    ) {
        if ((number < 0) || (number > 999999999999)) {
            throw new Exception("Out of range");
        }

        let numParts = number.toString().split('.');
        let returnVal = "";
        for (let p = 0; p < numParts.length; p++) {
            let num = numParts[p];
            if (p == 1) {
                if (num.toString().length > 2) {
                    num = num.substr( 0, 2);
                }
                num = Number(num);

                returnVal += "، و";
            }
            //convert number into array of (string) number each case
            // -------number: 121210002876-----------//
            //  0       1       2       3  //
            //121   210   002   876
            let english_format_number = this.number_format(num);
            let array_number = english_format_number.toString().split(',');
            //convert each number(hundred) to arabic
            for (let i = 0; i < array_number.length; i++) {
                let place = array_number.length - i;
                returnVal += this.convertAr(Number(array_number[i]), place);
                if (this.isset(array_number[(i + 1)]) && array_number[(i + 1)] > 0) {
                    returnVal += ' و';
                }
            }

            if (p == 0 && currency) {
                if (num == 1) {
                    returnVal = `${currency} ${returnVal}`;
                } else {
                    if (num > 2 && num <= 10) {
                        returnVal = `${returnVal} ${currencyPlural}`;
                    } else {
                        returnVal = `${returnVal} ${currency}`;
                    }
                }
            } else if (p == 1 && currencyFraction) {
                if (num > 2 && num <= 10) {
                    returnVal = `${returnVal} ${currencyFractionPlural}`;
                } else {
                    returnVal = `${returnVal} ${currencyFraction}`;
                }
            }
        }


        return returnVal;
    }
    //private function
    static convertAr(number, place)
    {
        // take in charge the sex of NUMBERED
        //the number word in arabic for masculine and feminine
        let words = {
            'male' : {
                0 : '', 1 : 'واحد', 2 : 'اثنان', 3 : 'ثلاثة', 4 : 'أربعة', 5 : 'خمسة',
                6 : 'ستة', 7 : 'سبعة', 8 : 'ثمانية', 9 : 'تسعة', 10 : 'عشرة',
                11 : 'أحد عشر', 12 : 'اثنا عشر', 13 : 'ثلاثة عشر', 14 : 'أربعة عشر',
                15 : 'خمسة عشر',
                16 : 'ستة عشر', 17 : 'سبعة عشر', 18 : 'ثمانية عشر',
                19 : 'تسعة عشر', 20 : 'عشرون',
                30 : 'ثلاثون', 40 : 'أربعون', 50 : 'خمسون', 60 : 'ستون', 70 : 'سبعون',
                80 : 'ثمانون', 90 : 'تسعون', 100 : 'مئة', 200 : 'مئتان', 300 : 'ثلاثمئة',
                400 : 'أربعمئة', 500 : 'خمسمئة',
                600 : 'ستمئة', 700 : 'سبعمئة', 800 : 'ثمانمئة', 900 : 'تسعمئة'
            },
            'female' : {
                0 : '', 1 : 'واحدة', 2 : 'اثنتان', 3 : 'ثلاث', 4 : 'أربع', 5 : 'خمس',
                6 : 'ست', 7 : 'سبع', 8 : 'ثمان', 9 : 'تسع', 10 : 'عشر',
                11 : 'إحدى عشرة', 12 : 'ثنتا عشرة', 13 : 'ثلاث عشرة',
                14 : 'أربع عشرة', 15 : 'خمس عشرة',
                16 : 'ست عشرة', 17 : 'سبع عشرة', 18 : 'ثمان عشرة',
                19 : 'تسع عشرة', 20 : 'عشرون',
                30 : 'ثلاثون', 40 : 'أربعون', 50 : 'خمسون', 60 : 'ستون', 70 : 'سبعون',
                80 : 'ثمانون', 90 : 'تسعون', 100 : 'مئة', 200 : 'مئتان',
                300 : 'ثلاثمئة', 400 : 'أربعمئة', 500 : 'خمسمئة',
                600 : 'ستمئة', 700 : 'سبعمئة', 800 : 'ثمانمئة', 900 : 'تسعمئة'
            }
        };

        let mf = {1 : 'male', 2 : 'male', 3 : 'male', 4 : 'male'};
        let number_length = number.toString().length;
        let numberStr = number.toString();
        let returnVal = '';

        if (number == 0) {
            return '';
        } else if (Number(numberStr[0]) == 0) {
            if (Number(numberStr[1]) == 0) {
                number = Number(number.substr(-1));
            } else {
                number = Number(number.substr(-2));
            }
        }
        switch (number_length) {
            case 1:
                switch (place) {
                    case 1:
                        returnVal = words[mf[place]][number];
                        break;
                    case 2:
                        if ((number) == 1) {
                            returnVal = 'ألف';
                        } else if (number == 2) {
                            returnVal = 'ألفان';
                        } else {
                            returnVal = words[mf[place]][number] + ' آلاف';
                        }

                        break;
                    case 3:
                        if (number == 1) {
                            returnVal = 'مليون';
                        } else if (number == 2) {
                            returnVal = 'مليونان';
                        } else {
                            returnVal = words[mf[place]][number] + ' ملايين';
                        }

                        break;
                    case 4:
                        if (number == 1) {
                            returnVal = 'مليار';
                        } else if (number == 2) {
                            returnVal = 'ملياران';
                        } else {
                            returnVal = words[mf[place]][number] + ' مليارات';
                        }

                        break;
                }

                break;
            case 2:
                if (this.isset(words[mf[place]][number])) {
                    returnVal = words[mf[place]][number];
                } else {
                    let twoy = Number(numberStr[0]) * 10;
                    let ony = Number(numberStr[1]);
                    returnVal = words[mf[place]][ony] + ' و' + words[mf[place]][twoy];
                }
                switch (place) {
                    case 2:
                        if (number >= 3 && number <= 10) {
                            returnVal += ' آلاف';
                        } else {
                            returnVal += ' ألف';
                        }

                        break;
                    case 3:
                        if (number >= 3 && number <= 10) {
                            returnVal += ' ملايين';
                        } else {
                            returnVal += ' مليون';
                        }

                        break;
                    case 4:
                        if (number >= 3 && number <= 10) {
                            returnVal += ' مليارات';
                        } else {
                            returnVal += ' مليار';
                        }

                        break;
                }

                break;
            case 3:
                if (this.isset(words[mf[place]][number])) {
                    returnVal = words[mf[place]][number];
                    
                    if (number == 200) {
                        returnVal = 'مئتا';
                    }
                    switch (place) {
                        case 2:
                            returnVal += ' ألف';

                            break;
                        case 3:
                            returnVal += ' مليون';

                            break;
                        case 4:
                            returnVal += ' مليار';

                            break;
                    }
                    return returnVal;
                } else {
                    let threey = Number(numberStr[0]) * 100;
                    if (this.isset(words[mf[place]][threey])) {
                        returnVal = words[mf[place]][threey];
                    }
                    let twoyony = Number(numberStr[1]) * 10 + Number(numberStr[2]);
                    if (twoyony == 2) {
                        switch (place) {
                            case 1:
                                twoyony = words[mf[place]][2];
                                break;
                            case 2:
                                twoyony = 'ألفان';
                                break;
                            case 3:
                                twoyony = 'مليونان';
                                break;
                            case 4:
                                twoyony = 'ملياران';
                                break;
                        }
                        if (threey != 0) {
                            twoyony = 'و' + twoyony;
                        }
                        returnVal = returnVal + ' ' + twoyony;
                    } else if (twoyony == 1) {
                        switch (place) {
                            case 1:
                                twoyony = words[mf[place]][1];
                                break;
                            case 2:
                                twoyony = 'ألف';
                                break;
                            case 3:
                                twoyony = 'مليون';
                                break;
                            case 4:
                                twoyony = 'مليار';
                                break;
                        }
                        if (threey != 0) {
                            twoyony = 'و' + twoyony;
                        }
                        returnVal = returnVal + ' ' + twoyony;
                    } else {
                        if (this.isset(words[mf[place]][twoyony])) {
                            twoyony = words[mf[place]][twoyony];
                        } else {
                            let twoy = Number(numberStr[1]) * 10;
                            let ony = Number(numberStr[2]);
                            twoyony = words[mf[place]][ony] + ' و' + words[mf[place]][twoy];
                        }
                        if (twoyony != '' && threey != 0) {
                            returnVal = returnVal + ' و' + twoyony;
                        }
                        switch (place) {
                            case 2:
                                returnVal += ' ألف';

                                break;
                            case 3:
                                returnVal += ' مليون';

                                break;
                            case 4:
                                returnVal += ' مليار';

                                break;
                        }
                    }
                }
                break;
        }


        return returnVal;
    }

    static isset(value) {
        return value !== undefined;
    }

    static number_format(num)
    {
      return parseInt(num, 10).toLocaleString('en');
    }
}
