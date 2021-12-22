let a_dict = {'name':'bob', 'age':27}   //선언할때 {}
a_dict['name']  //값을 불러올때 [] => "bob"
a_dict['height'] = 180  //추가 'height':180 
a_dict      //{'name':'bob', 'age':27, 'height':180 }
a_dict['fruits'] = a_list
a_dict      //{'name':'bob', 'age':27, 'height':180, fruits:Array(4)}
a_dict['height']  //180
a_dict['fruits']    // ['수박', '참외', '배', '감']
a_dict['fruits'][0] //'수박'
a_dict['fruits'][1] //'참외'
a_dict['fruits'][2] //'배'