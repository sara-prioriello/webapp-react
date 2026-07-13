

import { useState, useEffect } from 'react';


export default function RevForm({ url, movieId }) {

    const initialFormData = {
        name: '',
        vote: '',
        text: ''
    };
    const [formData, setFormData] = useState(initialFormData);



    function healdeSubmit(e) {
        e.preventDefault();
        console.log(formData);

        console.log('Submitting review to:', url);
        const reviewURL = `${url}/reviews/${movieId}`;

        // Send the form data to the server to submit the review
        fetch(reviewURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        })
            .then(response => response.json())
            .then(data => {
                console.log('Success:', data);
                // Reset the form data after submission
                setFormData(initialFormData);
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }



    return (
        <section id="add_review_form" className="my-5">
            <div className="container">
                <div className="card p-5">
                    <h2>Add a Review</h2>
                    <form onSubmit={healdeSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">Your Name</label>
                            <input type="text" className="form-control" id="username" name="username" placeholder='Anonymous' autoComplete="off" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="rating" className="form-label">Vote</label>
                            <select className="form-select" id="rating" name="rating" value={formData.vote} onChange={e => setFormData({ ...formData, vote: e.target.value })}>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>

                        <div className="mb-3">
                            <label htmlFor="review" className="form-label">Text</label>
                            <textarea className="form-control" id="review" name="review" rows="3" value={formData.text} onChange={e => setFormData({ ...formData, text: e.target.value })}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </section>

    )
}