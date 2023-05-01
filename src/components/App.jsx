import profile from './task1/task-1';
import userData from './task1/user.json';

import Statistics from './task2/task-2';
import statisticsData from './task2/data.json';

import Friends from './task3/task-3';
import friendsData from './task3/friends.json';

import Transactions from './task4/task-4';
import TransactionsData from './task4/transactions.json';

export const App = () => {
  return (
    <section className="main-section">
      <h1>Profile</h1>
      <div>{profile(userData)}</div>
      <div>
        <Statistics title="Upload stats" stats={statisticsData} />
      </div>
      <h1>Friends</h1>
      <div>
        <Friends data={friendsData} />
      </div>
      <h1>Transactions</h1>
      <div>
        <Transactions data={TransactionsData} />
      </div>
    </section>
  );
};
