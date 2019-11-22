export class TaskDetailModel
{
    public TaskID:number;
    public TaskName: string;
    public ParentTaskID:number;
    public ParentTaskName:string;
    public TaskPriority:number;
    public TaskStartDate:Date;
    public TaskEndDate:Date;
    public TaskProjectID:number;
    public TaskProjectName:string;
    public TaskStatus:string;
    public UserID:number;
}