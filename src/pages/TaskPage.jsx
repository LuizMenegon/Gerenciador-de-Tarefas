import { useSearchParams } from "react-router-dom"
import { ChevronLeftIcon } from "lucide-react"
import { useNavigate } from "react-router-dom"

function TaskPage() {
    const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const title = searchParams.get("title");
    const description = searchParams.get("description");

    return (
    <div className="h-screen w-screen bg-slate-500 p-6">
        <div className="flex-justify-center space-y-4 w-[500px]">
            <div className ="flex-justify-center relative mb-6">
                <button
                    onClick={() => navigate(-1)} 
                    className= "absolute left-0 top-0 bottom-0 hover:bg-slate-700 cursor-pointer text-slate-100">
                    <ChevronLeftIcon />
                </button>
            <h1 className="text-3xl text-slate-100 font-bold text-center">
                Detalhes da Tarefa
            </h1>
            </div>
        <div className="p-6 bg-slate-200 rounded-md shadow flex flex-col mt-4 mb-4">
                <h2 className="text-2xl font-bold text-slate-600">{title}</h2>
                <p className="mt-4 text-slate-600">{description}</p>
        </div>
        </div>
    </div>
    );
}

export default TaskPage;