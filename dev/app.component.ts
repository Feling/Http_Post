import {Component} from 'angular2/core';
import {DataService} from "./data.service";

@Component({
    selector: 'my-app',
    template: `
        <div>
            <div class="Input">
            <label for="title">Title</label>
            <input type="text" id="title" #title>
        </div>
        <div class="input">
            <label for="body">Body</label>
            <input type="text" id="body" #body>
        </div>
        <div class="input">
            <label for="user-id">User ID</label>
            <input type="text" id="user-id" #userId>
         </div>
         <button (click)="onPost(title.value, body.value, userId.value)">Post Data </button>
         <button (click)="onGetPosts()">Get all Posts</button>
         <p>Response: {{response}}</p>
         </div>
    `,
    providers: [DataService]
})
export class AppComponent {
    response:string;

    constructor(private _dataService:DataService) {
    }

    onPost(title:string, body:string, userId:string) {
        const data = {
            title: title,
            body: body,
            userId: userId
        };
        this._dataService.postData(data).subscribe(
            data => this.response = JSON.stringify(data),
            error=> console.log(error)
        );
    }

    onGetPosts() {
        this._dataService.getData()
            .subscribe(
                data=> {
                    console.log(data);
                    this.response = JSON.stringify(data);
                },
                error => console.log(error)
            );
    }
}