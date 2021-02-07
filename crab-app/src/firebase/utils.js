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

export const getCrabStatus = async () => {
  return await getCrabDeathStatus();
};
