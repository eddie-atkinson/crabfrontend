import { projectFirestore } from './config';

const getCrabDeathStatus = async () => {
  const isDeadQuery = projectFirestore
    .collection('status')
    .where('aliveStatus', '==', false);

  const queryResults = await isDeadQuery.get();
  const returnObj = queryResults.docs.reduce(
    (acc, doc) => {
      const docData = doc.data();
      const {
        aliveStatus,
        dateVerified: { seconds },
      } = docData;
      const docDiedAtDate = new Date(seconds * 1000);
      if (!acc['isDead'] && !aliveStatus) {
        acc['isDead'] = true;
      }
      if (acc['diedAt'] > docDiedAtDate) {
        acc['diedAt'] = docDiedAtDate;
      }
      return acc;
    },
    { isDead: false, diedAt: new Date() }
  );
  return returnObj;
};

const getCrabLastAlive = async () => {
  const lastAliveQuery = projectFirestore
    .collection('status')
    .where('aliveStatus', '==', true)
    .orderBy('dateVerified', 'desc')
    .limit(1);
  const queryResults = await lastAliveQuery.get();
  const [lastAlive] = queryResults.docs.map((doc) => doc.data());
  const {
    dateVerified: { seconds },
  } = lastAlive;
  const lastAliveDate = new Date(seconds * 1000);
  return {
    ...lastAlive,
    dateVerified: lastAliveDate,
  };
};

export const getCrabStatus = async () => {
  console.log(await getCrabLastAlive());
  return await getCrabDeathStatus();
};
