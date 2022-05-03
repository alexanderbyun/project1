$(() => {

const $footer = $('<div>').attr('class', 'flex-footer')

const $githubImg = $('<img>').attr('src', 'images/github-blk.png').width(60)
const $facebookImg = $('<img>').attr('src', 'images/facebook.png').width(60)
const $instagramImg = $('<img>').attr('src', 'images/instagram.png').width(60)
const $linkedinImg = $('<img>').attr('src', 'images/linkedin.png').width(60)
const $twitterImg = $('<img>').attr('src', 'images/twitter.png').width(60)

const $githubUrl = $('<a>').attr('href', 'http://github.com').attr('target', 'blank')
const $facebookUrl = $('<a>').attr('href', 'http://facebook.com').attr('target', 'blank')
const $instagramUrl = $('<a>').attr('href', 'http://instagram.com').attr('target', 'blank')
const $linkedinUrl = $('<a>').attr('href', 'http://linkedin.com').attr('target', 'blank')
const $twitterUrl = $('<a>').attr('href', 'http://twitter.com').attr('target', 'blank').css('transition', '0.6s', 'ease-in-out')

$('.flex-footer-cont').append($footer)
$githubImg.appendTo($footer).wrap($githubUrl)
$facebookImg.appendTo($footer).wrap($facebookUrl)
$instagramImg.appendTo($footer).wrap($instagramUrl)
$linkedinImg.appendTo($footer).wrap($linkedinUrl)
$twitterImg.appendTo($footer).wrap($twitterUrl)

})