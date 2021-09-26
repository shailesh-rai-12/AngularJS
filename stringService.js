
app.factory('stringService',()=>{
    return {
        processString:(input)=>{
            if(!input){
                return input;
            }
            var output="";

            for(let i=0;i<input.length;i++)
            {
                if(i>0 && input[i]==input[i].toUpperCase())
                {
                    output+=" ";
                }

                output+=input[i];
            }

            return output;
        }
    }
})