import React, { Component } from 'react';
import { handleString } from 'helpers/index'
import { Link } from 'react-router-dom'
import Autosuggest from 'react-autosuggest';
import AutosuggestHighlightMatch from 'autosuggest-highlight/match'
import AutosuggestHighlightParse from 'autosuggest-highlight/parse'
import { connect } from 'react-redux';
import * as actions from 'actions'
import './style.scss'

class Search extends Component {
    constructor() {
        super();
        this.state = {
            key: null,
            value: '',
            suggestions: []
        }
    }
    escapeRegexCharacters = (str) => {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    getSuggestions = (value) => {
        const escapedValue = this.escapeRegexCharacters(value.trim()).toLowerCase();
        if (escapedValue === '') {
            return [];
        }
        return this.props.data
            .map(section => {
                if (section.array && section.array.length > 0 && section.array[0].address)
                    return {
                        title: section.title,
                        array: section.array.filter(rental => { return (rental.address.toLowerCase()).includes(escapedValue) }).slice(0, 5)
                    };
                if (!section.array.address)
                    return {
                        title: section.title,
                        array: section.array.filter(search => (search.toLowerCase()).includes(escapedValue)).slice(0, 5)
                    }
            })
            .filter(section => {
                if (section.array)
                    return section.array.length > 0
            });
    }

    getSuggestionValue = (suggestion) => {
        if (suggestion.address)
            return suggestion.address;
        else return suggestion;
    }

    renderSuggestion = (suggestion, { query }) => {
        if (suggestion.address) {
            const suggestionText = `${suggestion.address}`;
            const matches = AutosuggestHighlightMatch(suggestionText, query);
            const parts = AutosuggestHighlightParse(suggestionText, matches);
            return (

                <React.Fragment>
                    <Link onClick={this.props.closeNav} to={`/detail/${suggestion._id}`}>
                        <span  className={'suggestion-content ' + suggestion._id}>
                            <img style={{ maxWidth: "40px", maxHeight: "40px" }} src={suggestion.image[0]}></img>
                            <div className="suggestion-detail">
                                <p className="suggestion-title">{suggestion.title}</p>
                                <p className="name">
                                    {
                                        parts.map((part, index) => {
                                            const className = part.highlight ? 'highlight' : null;
                                            return (
                                                <span className={className} key={index}>{part.text}</span>
                                            );
                                        })
                                    }
                                </p>
                            </div>
                        </span>

                    </Link>
                </React.Fragment>
            );
        }
        else return <span>{suggestion}</span>
    }

    renderSectionTitle = (section) => {
        return (
            <strong className="section-title">{section.title}</strong>
        );
    }

    getSectionSuggestions = (section) => {
        return section.array;
    }
    onChange = (event, { newValue, method }) => {
        this.setState({
            value: newValue
        });
    };
    onSuggestionsFetchRequested = ({ value }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const { value, suggestions } = this.state;
        const inputProps = {
            className: "suggestion-input",
            value,
            onChange: this.onChange
        };
        return (
            <React.Fragment>
                <form autoComplete="off" className="navbar-form search-navbar-form f-left" >
                    <div className="input-group search-input-group">
                    <Autosuggest
                        multiSection={true}
                        suggestions={suggestions}
                        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                        getSuggestionValue={this.getSuggestionValue}
                        renderSuggestion={this.renderSuggestion}
                        renderSectionTitle={this.renderSectionTitle}
                        getSectionSuggestions={this.getSectionSuggestions}
                        inputProps={inputProps} />

                    <Link className="input-group-btn search-input-group-btn" to={`/search?key=${this.state.value}`} >
                        <button disabled={!value} onClick={this.props.closeNav} style={{ width: "50px" }} className="btn">
                            <i className="fa fa-search" />
                        </button>
                    </Link>
                    </div>
                </form>
            </React.Fragment>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        rentals: state.rentals
    }
}
export default connect(mapStateToProps)(Search);