export default class Task {
  constructor(title, id) {
    this.id = id;
    this.title = title;
    this.status = 0;
  }

  getTitle = () => this.title
  getStatus = () => this.status
}
