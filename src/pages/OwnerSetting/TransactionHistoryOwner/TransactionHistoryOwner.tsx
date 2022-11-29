import NavbarOwner from '../../../components/NavbarOwner/NavbarOwner';
import TableHistoryOwner from './TableHistoryOwner';
import './TransactionHistoryOwner.scss';

const TransactionHistoryOwner = () => {
    return (
        <div>
            <NavbarOwner />
            <div className="content-history__owner">
                <h1>Lịch sử giao dịch</h1>
                <TableHistoryOwner />
            </div>
        </div>
    )
}

export default TransactionHistoryOwner;