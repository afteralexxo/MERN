import React, { useState } from 'react';
import axios from 'axios'

function Create() {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    async function handleSubmit(e) {
        e.preventDefault()

        if (title && body) {
            await axios.post('http://localhost:8080/create', { title, body })
                .then(response => {
                    console.log(response.data);
                    setTitle('')
                    setBody('')
                })
        }
        if (title === '' && body === '') {
            alert('field is empty')
            return
        }
    }

    return (
        <form onSubmit={handleSubmit}>

            <input type="text" name='title' value={title} placeholder='Title' onChange={e => setTitle(e.target.value)} />
            <span></span>
            <input type="text" name='body' value={body} placeholder='Body' onChange={e => setBody(e.target.value)} />
            <span></span>
            <button type="submit" value="Submit">CREATE</button>

        </form>
    )
}

export default Create



// class Create extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = { title: '', body: ''}
//         // this.state = {bool: true}

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//     }

//     handleChange(e) {
//         // console.log(e.target.name)
//         if (e.target.name === 'title') {
//             this.setState({title: e.target.value.toString()} );
//         }
//         if (e.target.name === 'body') {
//             this.setState({body: e.target.value} );
//         }
//     }

//     handleSubmit(e) {
//         axios.post('http://localhost:8080/create', this.state.posted)
//         // .then(response => console.log(response))
//     }

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>

//                 <input type="text" name='title' value={this.state.title || 'title value'} onChange={this.handleChange}/>
//                 <span></span>
//                 <input type="text" name='body' value={this.state.body || 'body value'} onChange={this.handleChange} />
//                 <span></span>

//                 <button type="submit" value="Submit">CREATE</button>
//             </form>
//         );
//     }
// }
