cmake_minimum_required(VERSION 2.8.3)

project(thirdparty)

IF (WIN32)
    MESSAGE(STATUS "This is Windows.")
    set(PLATFORM "win")
    set(LIBPATH ${PLATFORM})
ELSEIF (APPLE)
    MESSAGE(STATUS "This is MacOS.")
    set(PLATFORM "mac")
    set(LIBPATH ${PLATFORM})
ELSEIF (UNIX)
    MESSAGE(STATUS "This is Linux64.")
    set(PLATFORM "linux")
    set(LIBPATH ${PLATFORM})
ELSE ()
    MESSAGE(STATUS "================ ERROR: This platform is unsupported!!! ================")
ENDIF (WIN32)

# #编译选项 Release 还是 Debug
# set(CMAKE_BUILD_TYPE "Release" CACHE STRING "set build type to release default")
# IF (CMAKE_BUILD_TYPE STREQUAL "")
#     set(CMAKE_BUILD_TYPE "Release")
# ENDIF ()
# message("CMAKE_BUILD_TYPE TYPE = " ${CMAKE_BUILD_TYPE})

message("PLATFORM = " ${PLATFORM}, ${CMAKE_SOURCE_DIR})

# #工程INSTALL目录
# if (UNIX)
#     set(INSTALL_PREFIX /usr/local/thirdparty)
# else ()
#     set(INSTALL_PREFIX C:\\thirdparty)
# endif ()

set(CMAKE_INSTALL_PREFIX "${CMAKE_SOURCE_DIR}/../..")

install(DIRECTORY include/ DESTINATION include)
install(DIRECTORY lib/${LIBPATH}/ DESTINATION lib)

message("install dir = " ${CMAKE_INSTALL_PREFIX})

