/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
	render() {
		const { siteConfig, language = '' } = this.props;
		const { baseUrl, docsUrl } = siteConfig;
		const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
		const langPart = `${language ? `${language}/` : ''}`;
		const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

		const SplashContainer = props => (
			<div className="homeContainer">
				<div className="homeSplashFade">
					<div className="wrapper homeWrapper">{props.children}</div>
				</div>
			</div>
		);

		const ProjectTitle = () => (
			<h2 className="projectTitle">
				{siteConfig.headerTitle}
				<small className="header-title" >{siteConfig.tagline}</small>
			</h2>
		);

		const PromoSection = props => (
			<div className="section promoSection">
				<div className="promoRow">
					<div className="pluginRowBlock">{props.children}</div>
				</div>
			</div>
		);

		const Button = props => (
			<div className="pluginWrapper buttonWrapper">
				<a className="button" href={props.href} target={props.target}>
					{props.children}
				</a>
			</div>
		);

		return (
			<SplashContainer>
				<div className="inner">
					<img className="home-banner" src="img/banner4.png" />
					<ProjectTitle siteConfig={siteConfig} />

				</div>
				<div className="top-badges">
					<a href="https://codeclimate.com/github/pankod/svelte-boilerplate/maintainability">
						<img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/maintainability" />
					</a>
					<a href="https://codeclimate.com/github/pankod/svelte-boilerplate/test_coverage">
						<img src="https://api.codeclimate.com/v1/badges/077c02d5cb9ec7d8a654/test_coverage" />
					</a>
					<a href="https://travis-ci.org/pankod/svelte-boilerplate">
						<img src="https://travis-ci.org/pankod/svelte-boilerplate.svg?branch=master" alt="Build Status" />
					</a>
					<a href="https://david-dm.org/pankod/svelte-boilerplate">
						<img src="https://david-dm.org/pankod/svelte-boilerplate.svg" alt="Dependency Status" />
					</a>
					<a href="https://david-dm.org/pankod/svelte-boilerplate#info=devDependencies">
						<img src="https://david-dm.org/pankod/moleculerjs-boilerplate/dev-status.svg" alt="devDependency Status" />
					</a>
				</div>
			</SplashContainer>
		);
	}
}

class Index extends React.Component {
	render() {
		const { config: siteConfig, language = '' } = this.props;
		const { baseUrl } = siteConfig;

		const Block = props => (
			<Container
				padding={['bottom', 'top']}
				id={props.id}
				background={props.background}>
				<GridBlock
					align={props.align}
					contents={props.children}
					layout={props.layout}
				/>
			</Container>
		);

		const FeatureCallout = () => (
			<div
				className="productShowcaseSection paddingBottom"
				style={{ textAlign: 'center' }}>
				<h2>Features </h2>
			</div>
		);

		const TryOut = () => (
			<Block id="try">
				{[
					{
						content:
							'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
						image: `${baseUrl}img/sample.svg`,
						imageAlign: 'left',
						title: 'Ultrices',
					},
				]}
			</Block>
		);

		const LearnHow = () => (
			<Block background="light">
				{[
					{
						content:
						  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et.',
						image: `${baseUrl}img/sample.svg`,
						imageAlign: 'right',
						title: 'Nullam',
					},
				]}
			</Block>
		);
		const LastFeature = () => (
			<Block background="light">
				{[
					{
						content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
						image: `${baseUrl}img/sample.svg`,
						imageAlign: 'right',
						title: 'Mattis'
					},
				]}
			</Block>
		);

		const Features = () => (
			<React.Fragment>
				<Block layout="fourColumn" align='center'>
					{[
						{
							content: 'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque sodales ut.',
							image: `${baseUrl}img/sample-screen.svg`,
							imageAlign: 'top',
							title: 'Ipsum',
						},
						{
							content: 'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque sodales ut.',
							image: `${baseUrl}img/sample-screen.svg`,
							imageAlign: 'top',
							title: 'Ipsum',
						},
						{
							content: 'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque sodales ut.',
							image: `${baseUrl}img/sample-screen.svg`,
							imageAlign: 'top',
							title: 'Ipsum',
							className: 'orm'
						},
						{
							content: 'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque sodales ut.',
							image: `${baseUrl}img/sample-screen.svg`,
							imageAlign: 'top',
							title: 'Ipsum',
						}
					]}
				</Block>

				<Block layout="fourColumn" align='center'>
					{[

						{
							content: 'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque sodales ut.',
							image: `${baseUrl}img/sample-screen.svg`,
							imageAlign: 'top',
							title: 'Ipsum',
						},
						{
							content: 'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque sodales ut.',
							image: `${baseUrl}img/sample-screen.svg`,
							imageAlign: 'top',
							title: 'Ipsum',
						},
						{
							content: 'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque sodales ut.',
							image: `${baseUrl}img/sample-screen.svg`,
							imageAlign: 'top',
							title: 'Ipsum',
						},
						{
							content: 'Commodo sed egestas egestas fringilla phasellus faucibus scelerisque sodales ut.',
							image: `${baseUrl}img/sample-screen.svg`,
							imageAlign: 'top',
							title: 'Ipsum',
						}
					]}
				</Block>
			</React.Fragment>
		);



		return (
			<div>
				<HomeSplash siteConfig={siteConfig} language={language} />
				<div className="mainContainer homeMain">
					<Features />
					<FeatureCallout />
					<LearnHow />
					<TryOut />
					<LastFeature />
				</div>
			</div>
		);
	}
}

module.exports = Index;
