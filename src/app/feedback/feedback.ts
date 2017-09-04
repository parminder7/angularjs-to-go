export class Feedback {

  constructor(
    public _id: string,
    public feedbackFor: string,
    public title: string,
    public feedbackBody: string
  ) {}
}
