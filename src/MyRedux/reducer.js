    
const initialState ={
    students: [] ,
    empConnect: [
        {id:1, name: 'admin', username: 'admin', password: '123', auth: '1'},
        {id:2, name: 'emplyee front' ,username: 'emp1',password: '123', auth: '2'},
        {id:3, name: 'engineer' ,username: 'engine',password: '123', auth: '3'},
        
    ],
    oJob:[],
    Damage:[],
    member:[]
}

const reducer = (state = initialState, action) =>{
   
    //load... data
    const allStudents = [...state.member];
    /*const allJob= [...state.oJob];*/
   
    //check... case
    switch (action.type) {
        //students testing-----
        //delete
        /*case 'DEL_STUDENT':
            const newState ={
                ...state,
                students: state.students.filter(item => item.id !== action.payload)
            }
            return newState;
        //add student    
        case 'ADD_STUDENT':
            const addState = {
                ...state,
                students: [action.payload , ...state.students]
            }
            return addState;
        //edit student
        case 'EDIT_STUDENT':
            const indexForState = allStudents.findIndex((i) => {
                return i.id === action.payload.id;
            });
            allStudents[indexForState] = {
                id: action.payload.id,
                name: action.payload.name,
                score: action.payload.score
            }
            const editState = {
                ...state,
                students: allStudents
            }
            return editState;
        //---end student---
        
        //------ state Job -----
        // add new job
        case 'ADD_JOB':
            const addStateJob = {
                ...state,
                oJob: [action.payload , ...state.oJob]
            }
            return addStateJob;
       
        //edit student
        case 'EDIT_JOB':
            const indexForJob = allJob.findIndex((i) => {
                return i.id === action.payload.id;
            });
            allJob[indexForJob] = {
                id: action.payload.id,
                acc_tools: action.payload.acc_tools,
                address: action.payload.address,
                bran: action.payload.bran, 
                c_name: action.payload.c_name,
                c_tel: action.payload.c_tel,
                c_year: action.payload.c_year,
                car_number: action.payload.car_number,
                color: action.payload.color,
                d_detail: action.payload.d_detail,
                damage: action.payload.damage,
                e_date: action.payload.e_date,
                e_mail: action.payload.e_mail,
                gear: action.payload.gear,
                insurance: action.payload.insurance,
                model_number: action.payload.model_number,    
                s_date: action.payload.s_date,
                serie: action.payload.serie,
                c_card_number: action.payload.c_card_number,
                car_type: action.payload.car_type,
                kilo_numb: action.payload.kilo_numb,
                id_customer: action.payload.id_customer,
                acc_date: action.payload.acc_date,
                acc_number: action.payload.acc_number,
                sub_insurance: action.payload.sub_insurance,
                ins_tel: action.payload.ins_tel,
                ins_fax: action.payload.ins_fax,
                ins_number: action.payload.ins_number,
                ins_type: action.payload.ins_type,
                clam_number: action.payload.clam_number,
                limit_amount: action.payload.limit_amount,
                ins_fax: action.payload.ins_fax,
                report_date: action.payload.report_date,
                emp_name:action.payload.emp_name,
                re_name: action.payload.re_name,
                rep_name: action.payload.rep_name,
                i_name: action.payload.i_name,
                i_tel: action.payload.i_tel,
                n_color: action.payload.n_color,
                job_number:action.payload.job_number
            }
            const editJob = {
                ...state,
                oJob: allJob
            }
            return editJob;
        //---add member ----
        case 'ADD_EMP':
            const addMemberEmp = {
                ...state,
                empConnect: [action.payload , ...state.empConnect]
            }
            return addMemberEmp;
       //----- out of case -----*/
       case 'GET_LIST':
            const allStudents = {
                ...state,
                member: action.payload
            }
            return allStudents;
        default:
            break;
    }
    //end switch case
    return state;
}
export default reducer;