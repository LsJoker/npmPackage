let alert = function(){
}

import vue from "vue";
import alertVue from "./alert.vue";

let alertConstructor = vue.extend(alertVue)

let __Alert = { 
    ini:null,
    create(){
        if(!__Alert.ini){
            __Alert.ini = new alertConstructor({
                el:document.createElement("div")
            })
            document.body.appendChild(__Alert.ini.$el);
        }
    }
}


alert.msg = (param)=>{
    __Alert.create();
    if(Object.prototype.toString.call(param) === '[object String]'){
        __Alert.ini.$data.content = param;
    }
}
// Layer.msg = (param,timer)=>{
//     __Msg.create();    
//     __Msg.ini.$data.content = param ? "<img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAA6/NlyAAAAAXNSR0IArs4c6QAABa9JREFUaAXlm09PHVUYxuHeFqIJJVq1dGVcEGBBTLgk1Ig2NNHUhFjjjhXu/ABgFy66wJ1tP4Cu2hUb02iCaTdaaUmICRcSCBHCxuhCjBolEKEIF3/PMHM7M52ZO3c4Zy60Jzk5/9/nfc77zrlnzpzb3GQpzM3NPY/oQWKJ2NXc3NxF2nFwcNBGvo18E/lN8ptk18mvkiqWiTP9/f3/khoPzSYlLi0tndvd3R1B5ofEAUi0ZJHPJOwy7kfinZaWlsne3t7fs8iJGmOE8Pz8/EXIjRMvA3IqCugIdXtMwD3ijb6+vukjyHGGHokwbjuElAmiXDePMAPINdz9flawTIQheh7Am0S5byPCJKBjEP+tXvC6CeO+71UqFQG21wtmuP9GoVAYwc3v1iO3UE9nLDvGczrFmEaTldrt0kU61cMhlYXX1tZaNzY2vkDwaD3Cc+x7u729/ePOzs5HtTBrEsaFX2YmvyG+UUtYI9tZxWeJV3DxP5L0SHRpWfYkkBVBGUS6SufMhOXGliy7j1KKRoN0dR+9WLmxFnYXA6PPLC43XSwWh9DmjCL5d0nnY7XL1jCatJBFPsP66WG2poixE1KvLpC9XiqVrobHgVEsl8tfUf9BuC1rGawKcTjqJ+sJwszOeYB+Ihr76QF8FvA3SQ+iSKysrLRtbW39TNuLUe0Z6zYY1xPenERZUDsoY2RdZb+OI6v27u5uvTVl3i66GOFEHMQlEAKEsa6er5FADzOFmq96uPY/ZqACUkZcTtXKAGFqJ6otBjOQeSWFuJdS9MnSJcCpSliveEiz8taDu55LoaktwoMuN0eFKmGsMJ5CqUxdGmxhbUqq3BzCOqmgUi/vVgIWbqRLi/BlcRQ5h7B7LGP6pMI/eYmEUajApLzgH2A4f8rleEgY4TqDshYglEh4YWHhrEhbU+BQsMOxwLKt08UBy2Bnkjb1kLW1YPlpDYirZnUQwEyni35ptfI7OztJVrZO2OU4KMI6N7YeeIYaStglWBLhLutsAeD8Kem32LqFXY5dWh1zIczBX6yFc3qGm8RVFu7Iw8JgxBKmLS8LdxSY3bY8CIPTcMLiKpfOhTA4DScsrnLpvELDCYuoXFqfK62HY+LSm3LpXAgfE5felEuvWzcvAHEWXl5e1i5Pp5h5hHW59GoeSGCcXlxcfOKNaHt7+2xO+Jr0VVk4L8JN+/v7r4bJcTb9WrjOYtkhXLYIEBAN4fcDFRTYgb0TrrNYLsvCMywoulORRxjnFa3XA+Ks6XXy417ZZupynHEO4jn5f4B/v2UT0JMN8CPy37rlYXCtv5oKC9yHfPl42zvWuUNdLoQhqK97Vk9YRDAiiOPhEY+uBpHfi+j0tFTtuRwPCeseFCa/Z5sdGPq68AnxAvES5euk/xGtBnHz7np5Li0fv4G7DVtE/gv5fXzc+sWHcZ+Fa4qV+nvqir56o1lx8wRqlXYCX/emyegelJUA6Kchsg4OuA/IfGkF9FDojMvNKVUJu4DXLALLipGB45/vIhvMVAY4BQhjAX2y1AJmPODOB8aF1hY46XKq9gwQdmvHSPUx2WjApS/FCWQuYtvixqSoFwdxCQRn4xGoocBCYvzKA2L/bG1t7WO1/NWPx85LXyx/IBpbtJjc9FcePGVQRLNTXd28+qOkKPI34z8jfYhVnyPVNUZtLU8fRW7E2HFc+WZEfVOkhb2OkL5FftQrn5D0NmQ/itM16hmu9tV1PqwwW6045hnpKp2T1EwkrLuLCLlyEkhLR+la675lokt7M/VMXS71SCvVQsYsfs6Ck+gZ/jE28+hSQZercQtUFHYqC/sH6ieLlVWbE9N3ufwwafL2L4hLC/ald0l6iFZ2ZMJIEYTd4+qSovvjLnVb+PFQx8WHKE8QrVx38mO5eb3c5P8nj7AiuPlFnqWn/288YeLPzB+1wsRVZkU/ln/F+x+e3iSh5EgkpAAAAABJRU5ErkJggg==' style='display:inline-block;width:20px;height:20px;margin-right:10px;'>"+param:param; 
//     __Msg.ini.$data.timer = timer||2000;
//     __Msg.ini.show = true;
// }


export {alert}; 
export default alert ;


