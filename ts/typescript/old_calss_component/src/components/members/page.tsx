import * as React from "react";


//类型接口导入
import { MemberEntity } from '../../model';
import { memberAPI } from '../../api/member';

//约束 状态的类型 
interface State {
    members: MemberEntity[];
}
//约束 Props的类型 

interface Props {

}

// export const MembersPage: React.StatelessComponent<{}> = () => {
//   return (
//     <div className="row">
//       <h2> Members Page</h2>
//     </div>
//   );
// };
export class MembersPage extends React.Component<Props, State> {
    constructor(props) {
        super(props);
        this.state = { members: [] };
    }
    public componentDidMount() {
        memberAPI.fetchMembers()
            .then((members) => {
                this.setState({ members });
            });
    }
    public render() {
        return (
            <div className="row">
                <h2> Members Page</h2>
                <table className="table">
                    <thead>
                        {MemberHeader()}
                    </thead>
                    <tbody>
                        {this.state.members.map(MemberRow)}
                    </tbody>
                </table>
            </div>
        );
    }
};
const MemberHeader = () => {
    return (
        <tr>
            <th>Avatar</th>
            <th>Id</th>
            <th>Name</th>
        </tr>
    );
}
const MemberRow = (member: MemberEntity) => {
    return (
        <tr key={member.id}>
            <td>
                <img src={member.avatar_url} className="avatar" />
            </td>
            <td>
                <span>{member.id}</span>
            </td>
            <td>
                <span>{member.login}</span>
            </td>
        </tr>
    )
}