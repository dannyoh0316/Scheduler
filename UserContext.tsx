import { createContext } from 'react';
// import { IState } from './reducer';


// interface IContextProps {
//   state: IState;
//   dispatch: ({type}:{type:string}) => void;
// };

const UserContext = createContext<any>(undefined);

export default UserContext;
