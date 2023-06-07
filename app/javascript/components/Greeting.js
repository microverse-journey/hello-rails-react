import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getGreetings } from '../redux/greetingSlice';

let render = true;
function Greeting() {
    const { greeting } = useSelector((store) => store.greeting);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!render) {
          return;
        }
        render = false;
        dispatch(getGreetings());
    }, []);
  return (
    <h1>{greeting}</h1>
  );
}

export default Greeting;
