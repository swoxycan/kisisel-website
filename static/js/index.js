var playing = false
window.onload = function () {
    $('#enter').addClass('opacity-100')
    $('.fa-volume-off').addClass('hidden')
    $('.loader').remove()
    $('#enter').click(function () {
        playing = true
        $('.fa-play').addClass('hidden')
        video = document.getElementById('background-video')
        video.play()
        video.volume = 0.1
        $('.loading-page').remove()
        $('.background').addClass('opacity-100')
        $('.info').addClass('opacity-100')
    })
    setInterval(function () {
        video = document.getElementById('background-video')
        video.volume = $('#volume').val() / 100
        if ($('#volume').val() === '0') {
            $('.fa-volume-high').addClass('hidden')
            $('.fa-volume-off').removeClass('hidden')
        } else {
            $('.fa-volume-high').removeClass('hidden')
            $('.fa-volume-off').addClass('hidden')
        }
    },100)
    $('.fa-pause,.fa-play').click(function () {
        video = document.getElementById('background-video')
        if (playing) {
            playing = false
            video.pause()
            $('.fa-play').removeClass('hidden')
            $('.fa-pause').addClass('hidden')
        } else {
            playing = true
            video.play()
            $('.fa-play').addClass('hidden')
            $('.fa-pause').removeClass('hidden')
        }
    })
}