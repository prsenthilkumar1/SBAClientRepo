export class TaskModel
{
    public TaskID:number;
        public ProjectID:number;
        public TaskName:string;
        public StartDate:Date;
        public EndDate:Date;
        public Priority:number;
        public Status:string
        public ParentID: number;
        public UserID: number;
}