var example1 = new Vue({
    el: '#root',
    data: {
        todoadd: "",
    }, 
    methods:{
        clickAddTodo: function(){
            var todoList = [];
            todoList.push({"nome": this.todoadd, "done": false});
            document.getElementById("todoView").innerHTML +=`
            <div class="d-flex row-12 border">
               <div class="d-flex col-10 px-2">
                    <a href="#" @click="clickAddDone">${todoList[0].nome}</a>
               </div>
               <div class="d-flex col justify-content-end">
               <button class="btn btn-outline-secondary" type="button" id="inputTodo" @click="clickRemTodo">
               <i class="fa-solid fa-xmark"></i>
               </button>
               </div>
            </div>`
            console.log(todoList); 
            return todoList;
        },
        clickAddDone: function(){
            todoList[0].done = true
            console.log(todoList[0].done)
        },
        clickRemTodo: function(){
        
        },
    }
    
})