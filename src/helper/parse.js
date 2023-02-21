export const stackparser = (arr) => {
    const res=[];
    arr.map((object) => {
       const newtechStack=[];
       object.techStack.split(",").map((stack)=>(newtechStack.push(stack.slice(1,-1))));
       newtechStack[0]=newtechStack[0].slice(1);
       newtechStack[newtechStack.length-1]=newtechStack[newtechStack.length-1].slice(0,-1);
       return res.push( {...object, techStack:newtechStack} );
    });
    return res;
};