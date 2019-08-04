exports.daimond = (req, res) => {
    const number = req.query.number || req.params.number;
    let part = Math.round(number/2);
    let temp = part-1;
    let myArray = [];
    let inArray = [];

        for(i=0; i<part-1; i++) {
            for(j=0; j<temp; j++){
                inArray.push(0);
            }
            for(j=0;j <= i;j++) {
                inArray.push(1);
            }

            for(j=0; j<i; j++){
                inArray.push(1);
            }
            for(j=0;j < temp;j++) {
                inArray.push(0);
            }
            temp--;
            myArray.push([...inArray]);
            inArray = [];
        }
    
        temp_space = 0;
        for(i=part; i>0;i--) {
            for(j=0; j<temp_space; j++){
                inArray.push(0);
            }
            for(j=0;j<i;j++) {
                inArray.push(1);
            }

            for(j=0; j<i-1; j++){
                inArray.push(1);
            }
            for(j=0;j<temp_space;j++) {
                inArray.push(0);
            }
            temp_space++;
            myArray.push([...inArray]);
            inArray = [];
        }
    res.json({data: myArray});
    
}