var React = require('react');
var ReactDOM = require('react-dom');
var Paginate = require('../lib/react-pagination-bootstrap3.js');

var Demo = React.createClass({
    render: function(){
        return(
            <Paginate test='2323232323'/>
        );
    }
});

ReactDOM.render(
    <Demo />,
    document.getElementById('demo')
);