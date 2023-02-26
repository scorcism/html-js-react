

const QA = [
    {
        Question: "Why did React implement a virtual DOM?",
        Answer: `If we look back at our online friends component, and let's say we want to dynamically add new friends to the list, with the pure JS code, the "whole component" will have to re-render each time you want to dynamically add a new friend to the list. On the other hand, "React" utilises its smart update mechanism that makes sure that the minimal number of changes are made in the DOM in order to re-render a component.`,
        link: [
            "https://reactjs.org/docs/reconciliation.html",
            "https://beta.reactjs.org/learn/preserving-and-resetting-state",
        ]
    },
]