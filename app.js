$(() => {

// =================================================
// About
// =================================================

let currentImgIndex = 0
let numOfImages = $('.carousel-images').children().length-1

$('.next').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex < numOfImages) {
        currentImgIndex++
        } else {
        currentImgIndex = 0
        }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

  $('.prev').on('click', () => {
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'none')
        if (currentImgIndex > 0) {
        currentImgIndex--
        } else {
        currentImgIndex = numOfImages
        }
    $('.carousel-images').children().eq(currentImgIndex).css('display', 'block')
  })

    
// =================================================
// Projects
// =================================================

    const $openBtn1 = $('#openModal1')
    const $openBtn2 = $('#openModal2')
    const $closeBtn1= $('#close1')
    const $closeBtn2= $('#close2')

    const $modal1 = $('#modal1')
    const $modal2 = $('#modal2')

    const openModal1 = () => {
        $modal1.css('display', 'block')
    }
    const openModal2 = () => {
        $modal2.css('display', 'block')
    }

    const closeModal1 = () => {
        $modal1.css('display', 'none')
    }
    const closeModal2 = () => {
        $modal2.css('display', 'none')
    }
    
    $openBtn1.on('click', openModal1)
    $closeBtn1.on('click', closeModal1)
    $openBtn2.on('click', openModal2)
    $closeBtn2.on('click', closeModal2)

// =================================================
// Footer
// =================================================

const $footer = $('<div>').attr('class', 'flex-footer')

const $githubImg = $('<img>').attr('src', 'images/github-blk.png').width(50)
const $facebookImg = $('<img>').attr('src', 'images/facebook.png').width(50)
const $instagramImg = $('<img>').attr('src', 'images/instagram.png').width(50)
const $linkedinImg = $('<img>').attr('src', 'images/linkedin.png').width(50)
const $twitterImg = $('<img>').attr('src', 'images/twitter.png').width(50)

const $githubUrl = $('<a>').attr('href', 'http://github.com').attr('target', 'blank')
const $facebookUrl = $('<a>').attr('href', 'http://facebook.com').attr('target', 'blank')
const $instagramUrl = $('<a>').attr('href', 'http://instagram.com').attr('target', 'blank')
const $linkedinUrl = $('<a>').attr('href', 'http://linkedin.com').attr('target', 'blank')
const $twitterUrl = $('<a>').attr('href', 'http://twitter.com').attr('target', 'blank').css('transition', '0.6s', 'ease-in-out')

    // Searched for how to make an image a hyperlink in jQuery and learned about wraps. Following resources used: 
    // https://api.jquery.com/wrap/
    // https://weblogs.asp.net/christoc/adding-a-hyperlink-to-an-image-img-with-jquery

$('.flex-footer-cont').append($footer)
$githubImg.appendTo($footer).wrap($githubUrl)
$facebookImg.appendTo($footer).wrap($facebookUrl)
$instagramImg.appendTo($footer).wrap($instagramUrl)
$linkedinImg.appendTo($footer).wrap($linkedinUrl)
$twitterImg.appendTo($footer).wrap($twitterUrl)

})