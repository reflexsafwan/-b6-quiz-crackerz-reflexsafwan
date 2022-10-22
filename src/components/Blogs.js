import React from 'react';

const Blogs = () => {
    return (
        <div className='mt-6'>
            <div className='my-3 py-3 px-10 '>
                <h2 className='mb-2 font-medium'>1: What is Purpose of react router?</h2>
                <p className='font-normal'>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.A tool that allows you to handle routes in a web app, using dynamic routing. Dynamic routing takes place as the app is rendering on your machine, unlike the old routing architecture where the routing is handled in a configuration outside of a running app. React router implements a component-based approach to routing. It provides different routing components according to the needs of the application and platform. The following illustration shows how react router’s dynamic routing works as compared to traditional static routing:</p>
            </div>
            <div className='my-3 py-3 px-10 '>
                <h2 className='mb-2 font-medium'>2. How does context api works?</h2>
                <p className='font-normal'>Context provides a way to pass data through the component tree without having to pass props down manually at every level.

                    In a typical React application, data is passed top-down (parent to child) via props, but such usage can be cumbersome for certain types of props (e.g. locale preference, UI theme) that are required by many components within an application. Context provides a way to share values like these between components without having to explicitly pass a prop through every level of the tree.</p>
            </div>
            <div className='my-3 py-3 px-10 '>
                <h2 className='mb-2 font-medium'>3. What is useRef?</h2>
                <p className='font-normal'>The useRef hook is the new addition in React 16.8. Before proceeding to this article there is a prerequisite to know about the ref in react.
                    The useRef is a hook that allows to directly create a reference to the DOM element in the functional component.

                    Syntax:

                    const refContainer = useRef(initialValue);
                    The useRef returns a mutable ref object. This object has a property called .current. The value is persisted in the refContainer.current property. These values are accessed from the current property of the returned object. The .current property could be initialised to the passed argument initialValue e.g. useRef(initialValue). The object can persist a value for a full lifetime of the component.

                    Example: How to access the DOM using useRef hook.</p>
            </div>
        </div>
    );
};

export default Blogs;