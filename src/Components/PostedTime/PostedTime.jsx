import  { useEffect, useState } from 'react';
import moment from 'moment';

const PostedTime = ( postTime) => {
  const [timeAgo, setTimeAgo] = useState(moment(postTime).fromNow());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeAgo(moment(postTime).fromNow());
    }, 60000); 

    return () => clearInterval(intervalId);
  }, [postTime]);

  return <p className='text-white text-sm'>{timeAgo}</p>;
};

export default PostedTime;