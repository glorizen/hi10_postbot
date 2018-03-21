import { Component, OnInit, NgZone } from '@angular/core';
import { UploadEvent, UploadFile,
  FileSystemFileEntry, FileSystemDirectoryEntry } from 'ngx-file-drop';

@Component({
  selector: 'app-postbot',
  templateUrl: './postbot.component.html',
  styleUrls: ['./postbot.component.css']
})
export class PostbotComponent implements OnInit {

  constructor(private ngZone: NgZone) { }

  ngOnInit() {
  }

  public files: any[] = [];
  public fileDetails: any = {};

  public dropped(event: UploadEvent) {
    // this.files = event.files;
    this.files = [];
    // this.myfiles
    const self = this;
    for (const droppedFile of event.files) {

      // Is it a file?
      if (droppedFile.fileEntry.isFile) {
        const fileEntry = droppedFile.fileEntry as FileSystemFileEntry;
        fileEntry.file((file: File) => this.ngZone.run(() => {

          // Here you can access the real file
          // console.log(droppedFile.relativePath, file);
          // this.fileDetails[droppedFile.relativePath] = file;

          this.files.push({
            file: droppedFile,
            details: file
          });

          // console.log(droppedFile);

          /**
          // You could upload it like this:
          const formData = new FormData()
          formData.append('logo', file, relativePath)
 
          // Headers
          const headers = new HttpHeaders({
            'security-token': 'mytoken'
          })
 
          this.http.post('https://mybackend.com/api/upload/sanitize-and-save-logo', formData, { headers: headers, responseType: 'blob' })
          .subscribe(data => {
            // Sanitized logo returned from backend
          })
          **/

        }));
      } else {
        // It was a directory (empty directories are added, otherwise only files)
        const fileEntry = droppedFile.fileEntry as FileSystemDirectoryEntry;
        console.log(droppedFile.relativePath, fileEntry);
      }
    }

    console.log(this.files);
  }

  public fileOver(event) {
    console.log(event);
  }

  public fileLeave(event) {
    console.log(event);
  }

  public getFileSize(givenFile) {
    
    if (givenFile.fileEntry.isFile) {
      
      const fileEntry = givenFile.fileEntry as FileSystemFileEntry;
      fileEntry.file((file: File) => {
        console.log('here iam', file.size);
        return file.size;
      });
    }
  }
}
